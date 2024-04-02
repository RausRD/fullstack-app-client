import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import { selectCurrent } from '../../features/user/userSlice';
import { MdAlternateEmail } from 'react-icons/md';
import { BASE_URL } from '../../constants';
import { Link } from 'react-router-dom';

export const Profile = () => {
  const current = useSelector(selectCurrent);

  if (!current) {
    return null;
  }

  const { name, email, avatarUrl, id } = current;

  return (
    <Card className="py-4 w-[302px]">
      <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={`${BASE_URL}${avatarUrl}`}
          width={370}
        />
      </CardHeader>
      <CardBody className="py-2 overflow-visible">
        <Link to={`/users/${id}`}>
          <h4 className="mb-2 font-bold text-large">{name}</h4>
        </Link>
        <p className="flex items-center gap-2 text-default-500">
          <MdAlternateEmail />
          {email}
        </p>
      </CardBody>
    </Card>
  );
};
