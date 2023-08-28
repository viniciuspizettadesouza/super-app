import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
    return (
        <div className="mt-6 flex gap-6">
            <Link href="https://www.linkedin.com/in/viniciuspizettadesouza/" passHref>
                <FontAwesomeIcon
                    icon={faLinkedin}
                    className="h-6 w-6 text-zinc-500 transition"
                />
            </Link>
            <Link href="https://github.com/viniciuspizettadesouza" passHref>
                <FontAwesomeIcon
                    icon={faGithub}
                    className="h-6 w-6 text-zinc-500 transition"
                />
            </Link>
        </div>
    );
};

export default SocialLinks;
