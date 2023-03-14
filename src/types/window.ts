import { Wallet } from '@coral-xyz/anchor'

export {}
declare global {
  interface Window {
    solana: Wallet
  }
}