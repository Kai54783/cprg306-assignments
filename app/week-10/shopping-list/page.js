"use client";
import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import { useUserAuth } from '../_utils/auth-context';
import Link from 'next/link';

export default function Page() {

  const {user} = useUserAuth();
  const [items, setItems] = useState(itemsData);

  const loadItems = async () => {
    if (user && user.uid) {
      const items = await getItems(user.uid);
      setItems(items);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]); // Ensure this runs when `user` changes

  const handleAddItem = async (newItem) => {
    if (user && user.uid) {
      const id = await addItem(user.uid, newItem);
      setItems([...items, { id, ...newItem }]);
    }
  };

  if (!user) {
    return(
      <div className="container mx-auto p-4">
        <p>You must be logged in to view this page</p>
        <Link href="/week8/">Go here to sign in</Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}
