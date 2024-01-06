import { useState, useEffect } from "react";
import SkeletonCardCoach from "../../elements/card-coach/skeleton";
import CardUser from "../../elements/card-user";
import { useGetUsers } from "../../../domain/hooks/user-get-users";

const CardsUsers = () => {
  const [users, setUsers] = useState<any[]>([]);

  const { data, isLoading, isFetching } = useGetUsers();

  useEffect(() => {
    data && setUsers(data);
  }, [data]);

  return (
    <div className="flex w-full gap-x-5 gap-y-4 flex-wrap">
      {users?.map((item: any, index: number) => (
        <CardUser key={index} {...item} />
      ))}
      {(isLoading || isFetching) &&
        [1, 2, 3, 4, 5].map(() => <SkeletonCardCoach />)}
    </div>
  );
};

export default CardsUsers;
