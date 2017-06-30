const formTheme = {
  // text input, textarea, and select styles
  regular: {
    valid: {
      normal: {
        borderColor: '#e5e5e5',
        color: '#666',
      },
      active: {
        borderColor: '#1e87f0',
        color: '#666',
      },
      disabled: {
        backgroundColor: '#f8f8f8',
        color: '#999',
        borderColor: '#e5e5e5',
      },
    },
    invalid: {
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
