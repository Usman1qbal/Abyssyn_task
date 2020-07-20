import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import MobileTearSheet from './MobileTearSheet';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import RaisedButton from 'material-ui/RaisedButton';
import './ColumnList.css';

const propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.array,
	updateTask: PropTypes.func.isRequired,
	removeTask: PropTypes.func.isRequired,
	removeMode: PropTypes.bool,
};

const defaultProps = {
	items: [],
	removeMode: [],
};



const ColumnList = (props) => {
	return (
		<div className="column-list">
			<MobileTearSheet style={{pading: 10}}>
				<List>
					<CSSTransitionGroup
						transitionName="task-animation"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={300}>
						{props.items.map(item => (
							<ListItem
								key={item.id+item.title}
								rightIcon={props.removeMode ? <DeleteIcon /> :
									<DeleteIcon style={{visibility: 'hidden'}} />}
									>
								
								<Checkbox
									label={item.title +"("+item.user+")"}
									disabled={props.removeMode}
									checked={item.status === 'Done'}
									onClick={() => (props.removeMode ? props.removeTask(item) : props.updateTask(item))}
									className={(item.status === 'Done') ? 'task-done': ''}
								/>
								<RaisedButton
								style={{margin: 10, width: '30%', maxWidth: 56}}
								label="Edit"
								onClick={() =>{console.log("edit data=>", item, props);props.editTask(item)}}
								 />
					
							</ListItem>
						))}
					</CSSTransitionGroup>
				</List>
			</MobileTearSheet>
		</div>
	)
};

ColumnList.propTypes = propTypes;

ColumnList.defaultProps = defaultProps;

export default ColumnList;
