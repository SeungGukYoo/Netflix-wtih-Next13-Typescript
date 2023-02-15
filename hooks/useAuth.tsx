import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "@firebase/auth";
import { useRouter } from "next/router";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { auth } from "@/firebase";

interface IAuth {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  error: string | null;
  loading: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<IAuth>({
  user: null,
  signUp: async () => {},
  signIn: async () => {},
  logout: async () => {},
  error: null,
  loading: false,
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const router = useRouter();

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          setLoading(false);
        } else {
          setUser(null);
          setLoading(true);
          router.push("/login");
        }
        setInitialLoading(false);
      }),
    [auth]
  );
  const signUp = async (email: string, password: string) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
      })
      .catch((err) => {
        alert(err.message);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };
  const signIn = async (email: string, password: string) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
      })
      .catch((err) => {
        alert(err.message);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };
  const logout = async () => {
    setLoading(true);
    signOut(auth)
      .then(() => setUser(null))
      .catch((err) => {
        alert(err.message);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      signUp,
      signIn,
      logout,
    }),
    [user, loading]
  );
  return (
    <AuthContext.Provider value={memoedValue}>
      {!initialLoading ? (
        children
      ) : (
        <p className="text-4xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          LOADING...
        </p>
      )}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
