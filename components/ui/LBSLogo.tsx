import Link from "next/link";
import Image from 'next/image';
import LBSLogoSVG from './LBSLogo.svg'

const LBSLogo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src={LBSLogoSVG} alt="LBS Logo" width={60} height={60} />
    </Link>
  );
};

export default LBSLogo;