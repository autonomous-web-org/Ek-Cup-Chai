import { useAuthDataStore } from "../_stores/user_auth_data";

const Profile = () => {
    const user = useAuthDataStore((state) => state.signInData?.user);

    if (!user) return null;

    // Extract initials
    const initials = user.displayName
        ?.split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

    return (
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm">
            <div className="w-10 h-10 bg-accent text-secondary font-bold rounded-full flex items-center justify-center text-sm">
                {initials}
            </div>
            <span className="text-md font-bold text-primary">{user.displayName}</span>
        </div>
    );
};

export default Profile;
