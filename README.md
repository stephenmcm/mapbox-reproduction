# Mapbox Search Debug Tool

A standalone Vite project for debugging and testing Mapbox search rendering logic extracted from the FoodStorm AddressSearch component.

## Features

- **Isolated Mapbox SearchBox Component**: Extracted from the original implementation with minimal dependencies
- **Interactive Configuration Panel**: Adjust settings in real-time
  - Mapbox access token input
  - Country code selection (AU, US, GB, CA, NZ)
  - Search type options (address, postcode, POI, combined)
  - Postcode/ZIP code label customization
  - User location proximity settings
  - Address-only mode toggle

- **Debug Console**: Built-in logging and state visualization
  - Real-time state tracking
  - Event logging
  - API response inspection
  - Selected address display
  - Address history tracking

## Getting Started

1. **Install dependencies**:
   ```bash
   cd mapbox-debug
   npm install
   ```

2. **Get a Mapbox Access Token**:
   - Go to [Mapbox Account](https://account.mapbox.com/access-tokens/)
   - Create a new token or use an existing one
   - Make sure it has the `geocoding:read` scope

3. **Configure (Optional)**:
   Create a `.env.local` file in the project root to pre-configure settings:
   ```env
   # Your Mapbox access token
   VITE_MAPBOX_ACCESS_TOKEN=pk.eyJ1I...your_token_here

   # Optional defaults
   VITE_DEFAULT_COUNTRY_CODE=AU
   VITE_DEFAULT_SEARCH_TYPE=address
   ```

   Alternatively, you can enter the token directly in the UI.

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   - Navigate to `http://localhost:5173`
   - Enter your Mapbox access token (if not set in .env.local)
   - Start testing!

## Key Files

- `src/components/AddressSearch.tsx` - The extracted Mapbox search component with debug logging
- `src/App.tsx` - Main application with configuration panel and debug display
- `src/App.css` - Styling for the debug interface

## Testing Different Scenarios

### 1. Postcode-only Search
- Set Search Type to "Postcode"
- Watch how the blur handler enforces selection
- Check console logs for event flow

### 2. Proximity-based Search
- Enable "Use User Location for Proximity"
- Enter latitude/longitude coordinates
- Observe how results are influenced by proximity

### 3. Country-specific Behavior
- Switch between different country codes
- Note differences in address formatting
- US: Place takes precedence over locality
- Others: Locality takes precedence over place

### 4. Address Parsing
- Select different addresses
- Check the Debug Information panel
- Review extracted fields (Address, Suburb, State, Postcode, Lat/Long)

## Debug Features

### Console Logging
All major events are logged to the browser console with the prefix `[AddressSearch]`:
- Component lifecycle events
- User interactions (onChange, onRetrieve)
- Blur event handling
- Address extraction logic

### Debug Panel
The component includes a visual debug panel showing:
- Current component state
- Configuration values
- Last API response (full JSON)
- Address selection history

### Anti-Autofill Attributes
The implementation includes protections against browser and password manager autofill:
- `autocomplete="off"`
- `data-1p-ignore="true"` (1Password)
- `data-lpignore="true"` (LastPass)
- `data-bwignore="true"` (Bitwarden)

## Common Issues to Debug

1. **Blur Handler Not Working**
   - Check if input element is found in DOM
   - Verify event listener attachment
   - Check `hasRetrieved` state

2. **Address Extraction Issues**
   - Review full API response in debug panel
   - Check country-specific logic
   - Verify context object structure

3. **Mapbox Attribution Removal**
   - Check if selector matches current Mapbox version
   - Verify DOM manipulation timing

## Modifications from Original

1. **Simplified Field Component**: Removed dependency on custom Field component
2. **Added Debug Logging**: Extensive console.log statements for tracking
3. **Visual Debug Panel**: Added UI to display internal state
4. **Configuration UI**: Interactive settings for testing different scenarios
5. **Standalone Environment**: No MobX, no external dependencies

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Next Steps for Debugging

1. Open browser DevTools Console
2. Enable "Preserve log" to keep logs across interactions
3. Test specific scenarios that are problematic
4. Check the Debug Information panel for API responses
5. Review console logs for event flow
6. Modify the component code directly for additional debugging

## Tips

- Use the address history to compare different selections
- Try edge cases like incomplete addresses or ambiguous locations
- Test with different browser autofill settings enabled/disabled
- Check mobile responsiveness using browser DevTools
