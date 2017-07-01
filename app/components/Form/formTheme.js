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
  // radio and checkbox styles
  misc: {
    normal: {
      borderColor: '#ccc',
      backgroundColor: 'transparent',
    },
    active: {
      borderColor: '#1e87f0',
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
};

export default formTheme;
