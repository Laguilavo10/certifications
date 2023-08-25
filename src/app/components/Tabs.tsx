'use client'
import { Tabs as TabContainer, Tab } from '@nextui-org/react'
interface Props {
  value: string
  handleValue: React.Dispatch<React.SetStateAction<string>>
  tabsOptions: string[]
}

export default function Tabs ({ value, handleValue, tabsOptions }: Props) {
  const selectTab = (tabName: string | number) => {
    if (tabName === value) return // avoid re-redering
    handleValue(tabName as string)
  }
  const tabs = ['Todos', ...tabsOptions]
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
        tabList: '!bg-black p-2 overflow-auto',
        tabContent: 'text-white'
      }}
    >
      {tabs?.map((tab) => (
        <Tab key={tab} title={tab.toUpperCase()} />
      ))}
    </TabContainer>
  )
}
