import {StyleSheet} from 'react-native';

const classes = StyleSheet.create({
  modalcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  container: {
    width: '100%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  filtersection: {
    marginVertical: '10%',
  },
  bytype: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bytypebtn: {
    marginHorizontal: '5%',
    height: 40,
    width: 40,
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bytypebtntext: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 14,
    color: 'rgba(99, 121, 244, 1)',
  },
  modalbtngroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalbtn: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '40%',
    borderRadius: 10,
    marginHorizontal: '2%',
    paddingVertical: '3%',
    shadowColor: '#000',
    elevation: 10,
    marginBottom: '4%',
  },
  modalbtnconfirm: {
    alignItems: 'center',
    width: '84%',
    borderRadius: 10,
    backgroundColor: 'rgba(99, 121, 244, 1)',
    marginHorizontal: '2%',
    paddingVertical: '3%',
    shadowColor: '#000',
    elevation: 10,
    marginBottom: '4%',
  },
  modalbtntext: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 14,
  },
  maincontainer: {
    // paddingBottom: '5%',
    paddingBottom: 90,
  },
  sectionheader: {
    paddingLeft: '3%',
    paddingVertical: '3%',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: 'rgba(122, 120, 134, 1)',
  },
  filter: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 15,
    width: '95%',
  },
  filterbtn: {
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(99, 121, 244, 1)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -100,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  filterbtntext: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
    color: 'white',
  },
  paginationsection: {
    justifyContent: 'flex-end',
    marginHorizontal: '5%',
    flexDirection: 'row',
  },
  paginationbtndisable: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(218, 218, 218, 1)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: 'rgba(0,0,0,0.6)',
    elevation: 10,
  },
  paginationbtn: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(99, 121, 244, 1)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: 'rgba(0,0,0,0.6)',
    elevation: 10,
  },
  paginationbtnactive: {
    width: 30,
    height: 30,
    backgroundColor: '#5784BA',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  paginationtext: {
    fontFamily: 'Kanit-Medium',
    fontSize: 14,
    color: 'black',
  },
  paginationtextactive: {
    fontFamily: 'Kanit-Medium',
    fontSize: 14,
    color: 'white',
  },
});
export default classes;
