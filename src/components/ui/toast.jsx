"use client"

import { useToast } from "./use-toast"

export const toast = (props) => {
    const { toast } = useToast()
    toast(props)
}
