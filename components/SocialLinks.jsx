import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function SocialLinks() {
    return (
        <div className="z-1 w-full flex">
            <div className="my-4 mr-4 md:my-6 md:mr-6 w-full border-dashed border-b-2 border-white" />
            <a className="mx-2" href="https://github.com/kmesic" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="w-8 md:w-12" />
            </a>
            <a className="mx-2" href="https://twitter.com/dev__ken" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="w-8 md:w-12" />
            </a>
            <a className="mx-2" href="https://linkedin.com/in/kenan-mesic/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="w-8 md:w-12" />
            </a>
            <div className="my-4 ml-4 md:my-6 md:ml-6 w-full border-dashed border-b-2 border-white" />
            {/*
            <a href="https://twitter.com/dev__ken">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="text-lg" href="https://linkedin.com/in/kenan-mesic/">
                <FontAwesomeIcon icon={faLinkedin} />
            </a> */}

        </div>
    );
}

