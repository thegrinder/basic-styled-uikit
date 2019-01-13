Default btnType

```js
<Button>Default</Button>
```

Primary btnType

```js
<Button btnType="primary">Primary</Button>
```

Danger btnType

```js
<Button btnType="danger">Danger</Button>
```

Small btnSize

```js
<Button btnSize="small">Small</Button>
```

Default btnSize

```js
<Button btnSize="default">Default</Button>
```

Large btnSize

```js
<Button btnSize="large">Large</Button>
```

Submitting button
```js
<Button
  submitting
  renderSpinner={<span>submitting</span>}
>
  Button
</Button>
```

Button with content on the left
```js
<Button
  left={(
    <span
      style={{
        display: 'inline-block',
        width: '10px',
        height: '10px',
        margin: '0 16px',
        borderRadius: '5px',
        background: '#fff',
      }}
    />
  )}
>
  Left
</Button>
```

Button with content on the left
```js
<Button
  right={(
    <span
      style={{
        display: 'inline-block',
        width: '10px',
        height: '10px',
        margin: '0 16px',
        borderRadius: '5px',
        background: '#fff',
      }}
    />
  )}
>
  Right
</Button>
```
