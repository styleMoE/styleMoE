interface SectionProps {
    title: string;
    className?: string;
    body?: string;
    children?: any;
}

export default function Section({ title, body, className, children }: SectionProps) {
    return (
        <div className="flex flex-col gap-y-4">
            <div className={`border-b pb-3 ${className}`}>
                <h2 className="text-blue-900 text-2xl sm:text-3xl font-light">
                    {title}
                </h2>
            </div>
            <p className="text-md sm:text-lg text-justify">
                {body}
            </p>
            <div>
                {children}
            </div>
        </div>
    )
}