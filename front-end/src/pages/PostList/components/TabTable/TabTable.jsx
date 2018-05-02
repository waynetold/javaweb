import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Tab, Search } from '@icedesign/base';
import CustomTable from './components/CustomTable';
import EditDialog from './components/EditDialog';
import DeleteBalloon from './components/DeleteBalloon';

// import axios from 'axios';
import { axios } from '../../../../configuration'

const TabPane = Tab.TabPane;

const tabs = [
  { tab: '全部', key: 'all' },
  // { tab: '已发布', key: 'released' },
  // { tab: '审核中', key: 'review' },
  // { tab: '已拒绝', key: 'rejected' },
];

export default class TabTable extends Component {
  static displayName = 'TabTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      dataSource: {},
      tabKey: 'all',
    };
    this.columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: 100,
      },
      {
        title: '手机',
        dataIndex: 'phone',
        key: 'phone',
        width: 110,
      },
      {
        title: 'QQ',
        dataIndex: 'qq',
        key: 'qq',
        width: 100,
      },
      {
        title: '微信',
        dataIndex: 'wechat',
        key: 'wechat',
        width: 100,
      },
      {
        title: '学院',
        dataIndex: 'college',
        key: 'college',
        width: 100,
      },
      {
        title: '班级',
        dataIndex: 'theClass',
        key: 'theClass',
        width: 100,
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
        width: 120,
      },
      {
        title: '毕业年份',
        dataIndex: 'graduationYear',
        key: 'graduationYear',
        width: 100,
      },
      {
        title: '操作',
        key: 'action',
        width: 150,
        render: (value, index, record) => {
          let user = sessionStorage.getItem('user')
          if (!user) {
            return <span>无可用操作</span>
          }
          user = JSON.parse(user)
          if (user.role !== 'administrator') {
            return <span>无可用操作</span>
          }
          return (
            <span>
              <EditDialog
                index={index}
                record={record}
                getFormValues={this.getFormValues}
              />
              <DeleteBalloon
                handleRemove={() => this.handleRemove(value, index, record)}
              />
            </span>
          );
        },
      },
    ];
  }

  componentDidMount() {
    // 先不做分页
    axios
      .get('/api/schoolmate/list?size=1000')
      .then((response) => {
        this.setState({
          dataSource: { all: response.data.list },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getFormValues = async (dataIndex, values) => {
    const { dataSource, tabKey } = this.state;
    dataSource[tabKey][dataIndex] = values;
    console.log('表单拿到的数据', values)
    try {
      await axios.post(`/api/schoolmate/update/${values.id}`, values)
    } catch (error) {
      console.log(error)
    }
    this.setState({
      dataSource,
    });
  };

  handleRemove = async (value, index) => {
    const { dataSource, tabKey } = this.state;
    const id = dataSource[tabKey][index].id
    // 删除数据
    try {
      await axios.post(`/api/schoolmate/delete/${id}`)
    } catch (error) {
      console.log(error)
    }
    dataSource[tabKey].splice(index, 1);
    this.setState({
      dataSource,
    });
  };

  handleTabChange = (key) => {
    this.setState({
      tabKey: key,
    });
  };

  onSearch = (e) =>{
    axios
    .get(`/api/schoolmate/list?size=1000&name=${e.key}`)
    .then((response) => {
      this.setState({
        dataSource: { all: response.data.list },
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }


  render() {
    const { dataSource } = this.state;
    return (
      <div className="tab-table">
        <IceContainer style={{ padding: '0 20px 20px' }}>
          <Search
            style={styles.search}
            type="secondary"
            placeholder="搜索"
            searchText=""
            onSearch={this.onSearch}
          />
          <Tab onChange={this.handleTabChange}>
            {tabs.map((item) => {
              return (
                <TabPane tab={item.tab} key={item.key}>
                  <CustomTable
                    dataSource={dataSource[this.state.tabKey]}
                    columns={this.columns}
                    hasBorder={false}
                  />
                </TabPane>
              );
            })}
          </Tab>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  complexTabTableOperation: {
    lineHeight: '28px',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    marginLeft: '10px',
    lineHeight: '20px',
  },
  operation: {
    marginRight: '12px',
    textDecoration: 'none',
  },
  tabExtra: {
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    marginTop: 17,
    marginLeft: 10,
  },
  tabCount: {
    marginLeft: '5px',
    color: '#3080FE',
  },
  pagination: {
    textAlign: 'right',
    paddingTop: '26px',
  },
};