'use client'
import {
  type PropsWithChildren,
  createContext,
  useContext,
  useState
} from 'react'

type Username = `${string}-${string}-${string}` | null

interface userContext {
  state: Username
  setState: React.Dispatch<React.SetStateAction<Username>>
}

const INITIAL_STATE_VALUE: Username = null

const DEFAULT_VALUE: userContext = {
  state: INITIAL_STATE_VALUE,
  setState: () => {}
}

const UserContext = createContext<userContext>(DEFAULT_VALUE)

export function UserProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState(INITIAL_STATE_VALUE)

  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUsername = () => {
  const { state: username, setState: setUsername } = useContext(UserContext)
  return { username, setUsername }
}
