import { AnchorProvider, Program } from '@coral-xyz/anchor'

export interface WalletContextType {
    anchorProvider: AnchorProvider
    getProgram: () => Promise<Program>
    setWalletAddress: React.Dispatch<React.SetStateAction<string>>
    walletAddress: string
}