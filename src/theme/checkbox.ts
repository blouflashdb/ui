export default (config: { colors: string[] }) => ({
  slots: {
    root: 'relative flex items-start',
    base: 'shrink-0 text-white dark:text-gray-900 rounded ring ring-inset ring-gray-300 dark:ring-gray-700 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
    container: 'flex items-center',
    wrapper: 'ms-2',
    indicator: 'flex',
    icon: 'size-full',
    label: 'font-medium text-gray-700 dark:text-gray-200',
    description: 'text-gray-500 dark:text-gray-400'
  },
  variants: {
    color: Object.fromEntries(config.colors.map((color: string) => [color, `focus-visible:ring-${color}-500 dark:focus-visible:ring-${color}-400`])),
    size: {
      '2xs': {
        base: 'size-3',
        container: 'h-4',
        wrapper: 'text-xs'
      },
      xs: {
        base: 'size-3.5',
        container: 'h-4',
        wrapper: 'text-xs'
      },
      sm: {
        base: 'size-4',
        container: 'h-5',
        wrapper: 'text-sm'
      },
      md: {
        base: 'size-[18px]',
        container: 'h-5',
        wrapper: 'text-sm'
      },
      lg: {
        base: 'size-5',
        container: 'h-6',
        wrapper: 'text-base'
      },
      xl: {
        base: 'size-[22px]',
        container: 'h-6',
        wrapper: 'text-base'
      }
    },
    required: {
      true: {
        label: 'after:content-[\'*\'] after:ms-0.5 after:text-red-500 dark:after:text-red-400'
      }
    },
    disabled: {
      true: {
        base: 'cursor-not-allowed opacity-75',
        label: 'cursor-not-allowed opacity-75',
        description: 'cursor-not-allowed opacity-75'
      }
    },
    checked: {
      true: ''
    },
    indeterminate: {
      true: ''
    }
  },
  compoundVariants: config.colors.flatMap((color) => ([{
    color,
    checked: true,
    class: `ring-2 ring-inset ring-${color}-500 dark:ring-${color}-400 bg-${color}-500 dark:bg-${color}-400`
  }, {
    color,
    indeterminate: true,
    class: `ring-2 ring-inset ring-${color}-500 dark:ring-${color}-400 bg-${color}-500 dark:bg-${color}-400`
  }
  ])),
  defaultVariants: {
    size: 'sm',
    color: 'primary'
  }
})