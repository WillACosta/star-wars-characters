export async function safeNetworkApiCall<T>(
  callback: () => Promise<Response>
): Promise<T> {
  try {
    const response = await callback()
    return await response.json()
  } catch (error) {
    throw new Error(`Request complete with an error: ${error}`)
  }
}
