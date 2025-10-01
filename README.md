# Mapbox Search Debug Tool

A standalone Vite project for debugging and testing Mapbox search rendering logic extracted from the FoodStorm AddressSearch component.
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
