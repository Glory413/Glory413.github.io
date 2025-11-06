import { FieldValueData } from "../../types"
import BlockchainSkeleton from "./BlockchainSkeleton"

interface Props {
  blockchain: FieldValueData[] | undefined
}

export default function Blockchain({ blockchain }: Props) {
  return (
    <div className="pt-11">
      {blockchain ? (
        blockchain.map((f) => (
          <div key={f.id} className="mb-7">
            <h3 className="capitalize text-2xl text-gray-300">{f.field}</h3>
            <progress
              className="progress progress-warning w-full bg-gray-800 mt-2.5"
              value={f.value}
              max="100"
            ></progress>
          </div>
        ))
      ) : (
        <>
          <BlockchainSkeleton />
          <BlockchainSkeleton />
          <BlockchainSkeleton />
          <BlockchainSkeleton />
        </>
      )}
    </div>
  )
}
