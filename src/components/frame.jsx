import { useContractRead } from "wagmi";

export default function Frame(props) {
    const contractAddress = props.address;
    const tokenId = props.totalSupply - 1;

    const getHash = useContractRead({
        address: contractAddress,
        functionName: "_tokenIdToHash",
        abi: props.contractAbi,
        args: [tokenId],
    })
    const getHTML = useContractRead({
        address: contractAddress,
        functionName: "hashToHTML",
        abi: props.contractAbi,
        args: [getHash.data, tokenId],
    })

    const scrawlIframe = getHTML.data ? (
        <iframe title="latest mint" width="400" height="570" src={getHTML.data}></iframe>
    ) : (
        <h2>Image loading</h2>
    );

    return (
        <div>
            {scrawlIframe}
        </div>
    )
}