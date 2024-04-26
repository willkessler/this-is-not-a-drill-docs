import React from 'react';
import Layout from '@theme/Layout'; // Import the Layout component

function ApiDocs() {
  return (
    <Layout
      title="API Documentation" // Set the title for the page
      description="API Documentation for our product"> {/* Description for SEO */}
      <iframe
        src="/api-docs.html"
        style={{
          width: '100%',
          height: 'calc(100vh - var(--ifm-navbar-height))', // Adjust height considering the navbar
          border: 'none',
          marginTop: 'var(--ifm-spacing-vertical)',
          marginBottom: 'var(--ifm-spacing-vertical)',
        }}
        title="API Documentation">
      </iframe>
    </Layout>
  );
}

export default ApiDocs;
