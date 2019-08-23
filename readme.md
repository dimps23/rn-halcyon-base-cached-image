## rn-halcyon-cached-image

---

### Installation

#### requires you to install `react-native-fast-image`

`yarn add react-native-fast-image`

then

```
yarn add rn-halcyon-cached-image
```

*only use Yarn if you want to install this package*

---

### Usage

- with image URL / local file

```jsx
<CachedImage
  // image URL
  uri="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/280b2e31-a9d8-4828-ab03-fad6dad800da/d4s6wtb-e329b767-a828-4bf6-90c4-532d37ccfecd.jpg/v1/fill/w_1047,h_763,q_70,strp/hosannas_by_sirmonkeymccoool_d4s6wtb-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA1MCIsInBhdGgiOiJcL2ZcLzI4MGIyZTMxLWE5ZDgtNDgyOC1hYjAzLWZhZDZkYWQ4MDBkYVwvZDRzNnd0Yi1lMzI5Yjc2Ny1hODI4LTRiZjYtOTBjNC01MzJkMzdjY2ZlY2QuanBnIiwid2lkdGgiOiI8PTE0NDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yk7SwvuKgv1t60YTaEk0wFQeRex7LtSy6dnBif7B_JM"
  // local IMAGE
  uri={require('image.png')}
  imageStyle={{
    height: 150,
    width: 300,
  }}
  resize="cover"
  onProgress={e => console.log('first image', e.nativeEvent.loaded / e.nativeEvent.total)}
/>
```

- with customized cache control

```jsx
<CachedImage
  uri={{
    uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e65e21bd-dc77-499e-962a-fa13cab37fc2/db3oupp-98398a93-a168-45d6-a0e6-5e5b949dc337.jpg/v1/fill/w_894,h_894,q_70,strp/noodle_by_kuvshinov_ilya_db3oupp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2U2NWUyMWJkLWRjNzctNDk5ZS05NjJhLWZhMTNjYWIzN2ZjMlwvZGIzb3VwcC05ODM5OGE5My1hMTY4LTQ1ZDYtYTBlNi01ZTViOTQ5ZGMzMzcuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ItRsssSxVBqD3tymM1Ty6oxppWA1CSSqRPb6pU0KiJY',
    token: 'someToken',
    priority: 'high',
    cache: 'web',
  }}
  imageStyle={styles.image}
  resize="center"
  onProgress={e => console.log('third image', e.nativeEvent.loaded / e.nativeEvent.total)}
/>
```