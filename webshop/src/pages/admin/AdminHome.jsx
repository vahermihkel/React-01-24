import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function AdminHome() {
  const { t } = useTranslation(); 

  return (
    <>
      <Button variant="primary" as={Link} to="/admin/add-product">{t("add-product")}</Button>{' '}
      <Button variant="secondary" as={Link} to="/admin/maintain-categories">{t("maintain-categories")}</Button>{' '}
      <Button variant="success" as={Link} to="/admin/maintain-products">{t("maintain-products")}</Button>{' '}
      <Button variant="warning" as={Link} to="/admin/maintain-shops">{t("maintain-shops")}</Button>{' '}
      <Button variant="info" as={Link} to="/admin/supplier">{t("supplier")}</Button>{' '}
    </>
  );
}

export default AdminHome;