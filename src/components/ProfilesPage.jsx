import { Link, Outlet } from "react-router-dom";

export default function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div>
      {profiles.map((profile) => {
        return (
          <>
            <Link id={profile} to={`/profiles/${profile}`}>
              Profile {profile}
            </Link>
            <br />
            <br />
          </>
        );
      })}
      <Outlet />
    </div>
  );
}
