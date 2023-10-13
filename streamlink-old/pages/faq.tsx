import Head from "next/head";
import Footer from "../components/ui/common/Footer";
import { Typography, Link } from "@mui/material";
import styles from '../styles/FAQ.module.css';
import "@fontsource/inter";
import Header from "../components/ui/common/Header";

interface FAQItemProps {
    title: string;
    content: JSX.Element;
}

const FAQTitle: React.FC<{ title: string }> = ({ title }) => (
    <Typography className={styles.faqSubtitle} variant="h6">{title}</Typography>
);

const FAQItem: React.FC<FAQItemProps> = ({ title, content }) => (
    <div className={styles.faqItem}>
        <FAQTitle title={title} />
        {content}
    </div>
);

const FAQContent: React.FC = () => (
    <div className='container'>
        <Typography variant='h4'>Frequently Asked Questions (FAQ)</Typography>
        {faqData.map((item, index) => (
            <FAQItem key={index} {...item} />
        ))}
    </div>
);

const faqData: FAQItemProps[] = [
    {
        title: "What is StreamLink?",
        content: <Typography>StreamLink is a lightweight, non-custodial digital wallet designed to simplify the process of transferring digital assets. Its unique feature is that it allows users to transfer assets using a link, making the process as easy as sharing a URL.</Typography>
    },
    {
        title: "How does StreamLink work?",
        content: <Typography>If you have Solana or any other supported digital asset, you can create a StreamLink. This link can then be shared with anyone over various platforms, such as text messages, Discord, email, and more. The recipient can access the assets simply by opening the link. In essence, the link itself acts as the wallet.</Typography>
    },
    {
        title: "Do I need to download any software or app to use StreamLink?",
        content: <Typography>Yes, StreamLink is designed to work with the browser wallet extensions Phantom Wallet, MetaMask, etc.</Typography>
    },
    {
        title: "Is StreamLink secure?",
        content: <Typography>Yes, StreamLink is designed with security in mind. As a non-custodial wallet, you have complete control over your assets. Additionally, the platform employs advanced security measures to ensure the safety of your digital assets.</Typography>
    },
    {
        title: "Can I use StreamLink with assets other than Solana?",
        content: <Typography>Currently, StreamLink supports Solana-based SPL token transfers. However, always check the official StreamLink website or platform for updates on supported digital assets.</Typography>
    },
    {
        title: "What if the recipient doesn't have a crypto wallet?",
        content: <Typography>That's the beauty of StreamLink! The recipient doesn't need a traditional crypto wallet to receive the assets. The link you send them acts as the wallet, allowing them to access and manage the assets seamlessly.</Typography>
    },
    {
        title: "How do I connect my existing assets to StreamLink?",
        content: <Typography>You can connect to StreamLink using your Gmail account or your Solana wallet. Once connected, you can easily create StreamLinks for transferring your assets.</Typography>
    },
    {
        title: "Are there any fees associated with using StreamLink?",
        content: <Typography>For specific details on fees, it's best to refer to the official StreamLink platform or website. Generally, platforms may have transaction fees, but they vary based on several factors.</Typography>
    },
    {
        title: "Can I cancel a StreamLink after sending it?",
        content: <Typography>Once a StreamLink is created and sent, the assets are tied to that link. If the recipient hasn't accessed the link, there might be ways to retrieve or cancel the transaction. Always refer to StreamLink's official guidelines or support for such queries.</Typography>
    },
    {
        title: "How is StreamLink different from other digital wallets?",
        content: <Typography>StreamLink's unique selling point is its simplicity and the ability to transfer assets via a link. While traditional wallets require both sender and receiver to have wallet addresses, StreamLink eliminates this need, making the process more user-friendly and accessible to a broader audience.</Typography>
    },
];

export default function FAQ() {
    return (
        <>
            <Head>
                <title>StreamLink - FAQ</title>
                <meta name="description" content="Frequently Asked Questions about StreamLink" />
                <meta property="og:title" content="FAQ - StreamLink" />
                <meta property="og:url" content="https://www.streamlink.xyz" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='wrap'>
                <Header showWalletButton={false} />
                <FAQContent />
                <Footer />
            </div>
        </>
    );
}
