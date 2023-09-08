import React from 'react';
import Image from 'next/image';

interface WorkExperienceItemProps {
    companyName: string;
    role: string;
    startDate: string;
    endDate: string;
    srcIcon: string;
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({ companyName, role, startDate, endDate, srcIcon }) => {
    return (
        <li className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                <Image
                    alt=""
                    width={28}
                    height={28}
                    src={srcIcon}
                    className="h-7 w-7 rounded-full"
                />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900">
                    {companyName}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500">{role}</dd>
                <dt className="sr-only">Date</dt>
                <dd className="ml-auto text-xs text-zinc-400" aria-label={`${startDate} until ${endDate}`}>
                    <time dateTime={startDate}>{startDate}</time> <span aria-hidden="true">—</span> <time dateTime={endDate}>{endDate}</time>
                </dd>
            </dl>
        </li>
    );
};

export default WorkExperienceItem;
