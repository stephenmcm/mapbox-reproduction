import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SearchBox } from '@mapbox/search-js-react';

// TypeScript workaround for SearchBox component type issue
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TypedSearchBox = SearchBox as any;

const BrokenWhenIOSAutocompleteUsed = () => {
  return (
    <div>
      <TypedSearchBox
        accessToken='pk.eyJ1Ijoic3RlcGhlbm1jbWFob24iLCJhIjoiY204eHpiZ2c0MDEzbDJpcGx5cm40emU1ZyJ9.w5HpqgcLgQBKHR1IrUCGZg'
        options={{
          language: 'en',
          country: 'US',
          types: 'postcode'
        }}
        placeholder='Postcode'
      />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrokenWhenIOSAutocompleteUsed />
  </StrictMode>,
)
