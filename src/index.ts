async function renewAccessToken() {
  const response = await fetch(".netlify/functions/token");
  const { token } = await response.json();
  return token;
}

async function main() {
  await customElements.whenDefined("atomic-search-interface");
  const searchInterface: HTMLAtomicSearchInterfaceElement =
    document.querySelector("atomic-search-interface")!;

  console.log("adding custom replace");
  const platformUrl = process.env.PLATFORM_URL!;
  const organizationId = process.env.ORGANIZATION_ID!;
  await searchInterface.initialize({
    accessToken: await renewAccessToken(),
    renewAccessToken,
    organizationId,
    platformUrl,
  });

  searchInterface.executeFirstSearch();
}

main();
