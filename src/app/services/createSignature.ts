const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? '';

export const createSignature = async (fileName: string, folder: string) => {
  try {
    const data = await fetch(`${BASE_URL}/api/create-signature`, {
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