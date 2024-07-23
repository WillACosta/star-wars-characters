import { toast } from 'react-toastify'

type ToastProps = {
  type: 'success' | 'error'
  message: string
}

export function useAppToast() {
  function showToast({ type, message }: ToastProps) {
    toast(message, {
      position: 'top-right',
      autoClose: 5000,
      type: type,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    })
  }

  return { showToast }
}
