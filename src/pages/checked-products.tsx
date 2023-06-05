import { useSearchParams } from 'react-router-dom';
import { Col, Row, Tag } from 'antd';
import styles from './checked-products.less';

function CheckedProductList({ showAll }) {
  const [params, setParams] = useSearchParams();
  const filters = params.getAll('productFilter');
  const allProducts = ['a', 'b', 'we'];

  const toggle = (item) => {
    if (filters.includes(item)) {
      setParams(
        Object.assign(Object.fromEntries(params), {
          productFilter: filters.filter((v) => v !== item),
        }),
      );
    } else {
      setParams(
        Object.assign(Object.fromEntries(params), {
          productFilter: [...filters, item],
        }),
      );
    }
  };

  return (
    <div className={styles.productList}>
      {(showAll ? allProducts : filters.filter((i) => allProducts.includes(i))).map((v) => (
        <Tag key={v} onClick={() => toggle(v)}>
          [{filters.includes(v) ? 'v' : ''}] {v} (click to toggle)
        </Tag>
      ))}
    </div>
  );
}

const TwoColumnChecked: React.FC = () => (
  <Row>
    <Col span={12}>
      <CheckedProductList showAll={true} />
    </Col>
    <Col span={12}>
      <CheckedProductList showAll={false} />
    </Col>
  </Row>
);
export default TwoColumnChecked;
