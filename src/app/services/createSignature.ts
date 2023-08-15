export const createSignature = async (fileName: string, folder: string) => {
  try {
    const data = await fetch('/api/create-signature', {
      method: 'POST',
      body: JSON.stringify({ fileName, folder })
    });
    const { signature, timestamp } = await data.json();
    return { signature, timestamp }
  } catch (error) {
    console.error(error);
    throw error;
  }
};