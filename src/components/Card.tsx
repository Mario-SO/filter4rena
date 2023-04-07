// components/Card.tsx

import React from 'react';

type CardProps = {
    link: string;
    severity: Severity;
    vulnerability: string;
    name: string;
};

type Severity = 'H' | 'M' | 'L' | 'N' | 'G';

const severityColors: Record<Severity, string> = {
    H: 'bg-red-500',
    M: 'bg-yellow-500',
    L: 'bg-green-500',
    N: 'bg-blue-500',
    G: 'bg-purple-500',
};

const severityIcons: Record<Severity, string> = {
    H: '🚧',
    M: '👀',
    L: '✅',
    N: '💡',
    G: '⛽️',
};

const Card: React.FC<CardProps> = ({ link, severity, vulnerability, name }) => {
    const truncatedVulnerability = vulnerability.length > 50 ? `${vulnerability.slice(0, 50)}...` : vulnerability;

    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`relative block rounded-sm ${severityColors[severity]} p-4 shadow-xl sm:p-6 lg:p-8`}
        >
            <div className="flex flex-col items-center gap-4">
                <h3 className="text-3xl font-bold">{severityIcons[severity]} {name}</h3>
                <p className="text-center text-sm sm:text-base">{truncatedVulnerability}</p>
            </div>
        </a>
    );
};

export default Card;
