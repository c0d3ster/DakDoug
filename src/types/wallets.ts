export interface WalletContextType {
    walletAddress: string | null
    setWalletAddress: React.Dispatch<React.SetStateAction<string>>
}