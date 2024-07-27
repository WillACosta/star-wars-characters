export async function safeNetworkApiCall<T>(
  callback: () => Promise<Response>
): Promise<T> {
  try {
    const response = await callback()
    const { data } = await response.json()
    return data
  } catch (error) {
    throw new Error(`Request complete with an error: ${error}`)
  }
}
