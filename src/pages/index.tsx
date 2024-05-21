import React from 'react';
import { Redirect } from '@docusaurus/router'; // Ensure this is the correct import for router

function Home(): JSX.Element {
   // Perform a client-side redirect to your desired page
   return <Redirect to="/docs/BasicInstallation" />;
}

export default Home;
