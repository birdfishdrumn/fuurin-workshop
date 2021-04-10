import { useState,useCallback } from "react";

export const useIsSignedInCheck = () => {
    const [open, setOpen] = useState<boolean>(false)
  const [sign, setSign] = useState<boolean>(false)
    const handleClose = useCallback(() => {
     setOpen(false)

    }, [setOpen])

  return {open,sign,handleClose}
}
