import { User, Mail, Lock } from 'lucide-react';

const AuthImagePattern = ({ title, subtitle }) => {
    return (
        <div className="hidden lg:flex items-center justify-center bg-gradient-to-r bg-base-200 p-12 mt-10 ">
            <div className="max-w-md text-center text-white">
                <div className="grid grid-cols-3 gap-3 mb-8">
                    {[...Array(9)].map((_, i) => (
                        <div
                            key={i}
                            className={"aspect-square rounded-2xl bg-primary/20 flex items-center justify-center animate-pulse"}
                        >
                            {i % 3 === 0 ? <User className="w-6 h-6 text-white" /> : i % 3 === 1 ? <Mail className="w-6 h-6 text-white" /> : <Lock className="w-6 h-6 text-white" />}
                        </div>
                    ))}
                </div>
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-white/80">{subtitle}</p>
            </div>
        </div>
    );
};

export default AuthImagePattern;