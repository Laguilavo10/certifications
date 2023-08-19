'use client'
import { Tabs as TabContainer, Tab } from '@nextui-org/react'
export const tabs = ['Todos', 'SENA', 'Platzi', 'Otros']
interface Props {
  value: string
  handleValue: React.Dispatch<React.SetStateAction<string>>
}

export default function Tabs ({ value, handleValue }: Props) {
  const selectTab = (tabName: string | number) => {
    if (tabName === value) return // avoid re-redering
    handleValue(tabName as string)
  }
  return (
    <TabContainer
      aria-label='Options'
      onSelectionChange={(tab) => { selectTab(tab) }}
      variant='bordered'
      size='lg'
      fullWidth={true}
      color='primary'
      classNames={{
        base: 'm-auto flex w-3/6',
        tabList: '!bg-black p-2',
        tabContent: 'text-white'
      }}
    >
      {tabs.map((tab) => (
        <Tab key={tab} title={tab} />
      ))}
    </TabContainer>
  )
}
