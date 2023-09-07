'use client'
import {
  type PropsWithChildren,
  createContext,
  useContext,
  useState
} from 'react'

export interface UserData {
  username: string
  email: string
}

interface userContext {
  state: UserData
  setState: React.Dispatch<React.SetStateAction<UserData>>
}

const INITIAL_STATE_VALUE: UserData = {
  username: '',
  email: ''
}

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

export const useUser = () => {
  const { state: user, setState: setUser } = useContext(UserContext)
  return { user, setUser }
}
