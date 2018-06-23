const formTheme = {
  // text input, textarea, and select styles
  regular: {
    valid: {
      normal: {
        backgroundColor: '#fff',
        borderColor: '#e5e5e5',
        color: '#666',
      },
      active: {
        backgroundColor: '#fff',
        borderColor: '#1e87f0',
        color: '#666',
      },
      disabled: {
        backgroundColor: '#f8f8f8',
        borderColor: '#e5e5e5',
        color: '#999',
      },
    },
    invalid: {
      backgroundColor: '#fff',
      color: '#f0506e',
      borderColor: '#f0506e',
    },
  },
  // inputs for inline editing
  inline: {
    valid: {
      normal: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: '#666',
      },
      hover: {
        backgroundColor: 'transparent',
        borderColor: '#e5e5e5',
        color: '#666',
      },
      active: {
        backgroundColor: 'transparent',
        borderColor: '#1e87f0',
        color: '#666',
      },
      disabled: {
        backgroundColor: '#f8f8f8',
        borderColor: '#e5e5e5',
        color: '#999',
      },
    },
    invalid: {
      backgroundColor: 'transparent',
      color: '#f0506e',
      borderColor: '#f0506e',
    },
  },
  // radio and checkbox styles
  misc: {
    valid: {
      normal: {
        borderColor: '#ccc',
        backgroundColor: 'transparent',
      },
      active: {
        borderColor: '#1e87f0',
        backgroundColor: 'transparent',
      },
      checked: {
        borderColor: 'transparent',
        backgroundColor: '#1e87f0',
      },
      disabled: {
        bordeColor: '#e5e5e5',
        backgroundColor: '#f8f8f8',
      },
    },
    invalid: {
      borderColor: '#f0506e',
      backgroundColor: 'transparent',
    },
  },
  toggle: {
    normal: {
      backgroundColor: '#ccc',
    },
    checked: {
      backgroundColor: '#1e87f0',
    },
  },
};

export default formTheme;
