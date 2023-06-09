'use client'

import classNames from 'classnames'
type SwitchProps = {
  selected: boolean
  onChange: (selected: boolean) => void
}
const Switch = ({ selected, onChange }: SwitchProps) => {
  return (
    <div
      onClick={() => onChange(!selected)}
      className={classNames(
        'mt-2 flex w-16 h-8 dark:bg-accent bg-gray-200 text-white rounded-full transition-all duration-500 cursor-pointer',
        {
          'bg-secondary': selected,
        }
      )}
    >
      <span
        className={classNames(
          'inset-y-0 start-0 dark:bg-tertiary bg-sky-500 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-  transition-all ',
          {
            'ml-8': selected,
          }
        )}
      >
        {selected ? (
          <svg
            data-checked-icon
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            data-unchecked-icon
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>
    </div>
  )
}

export default Switch
