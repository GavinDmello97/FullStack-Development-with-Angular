import { DISHES } from "../shared/dishes";
import apis from "../shared/apis";
import actionReducers from "./index";
const {
  dishesLoading,
  commentsLoading,
  leadersLoading,
  promotionsLoading,
  dishesFailed,
  leadersFailed,
  promotionsFailed,
  commentsFailed,
  addDishes,
  addComments,
  addNewComment,
  addLeaders,
  addPromotions,
} = actionReducers;

const getDishesLoading = (val) => dishesLoading(val);
const getDishesFailed = (error) => dishesFailed(error);
const getAddDishes = (dishes) => addDishes(dishes);
const getPromotionsLoading = (val) => promotionsLoading(val);
const getPromotionsFailed = (error) => promotionsFailed(error);
const getAddPromotions = (promotions) => addPromotions(promotions);
const getLeadersLoading = (val) => leadersLoading(val);
const getLeadersFailed = (error) => leadersFailed(error);
const getAddLeaders = (leaders) => addLeaders(leaders);
const getCommentsLoading = (val) => commentsLoading(val);
const getCommentsFailed = (error) => commentsFailed(error);
const getAddComments = (comments) => addComments(comments);

export const fetchDishes = () => async (dispatch) => {
  dispatch(getDishesLoading(true));
  apis
    .getDishes()
    .then(({ data }) => {
      console.log("DISHES: ", data);
      dispatch(getAddDishes(data));
    })
    .catch((error) => {
      console.log("DISHES: ", error);

      dispatch(getDishesFailed(error.code + ": " + error.message));
    });
};

export const fetchPromotions = () => async (dispatch) => {
  dispatch(getPromotionsLoading(true));
  apis
    .getPromotions()
    .then(({ data }) => {
      // console.log("PROMO: ", data);
      dispatch(getAddPromotions(data));
    })
    .catch((error) => {
      // console.log("PROMO: ", error);

      dispatch(getPromotionsFailed(error.code + ": " + error.message));
    });
};

export const fetchComments = () => async (dispatch) => {
  dispatch(getCommentsLoading(true));
  apis
    .getComments()
    .then(({ data }) => {
      // console.log("COMMENTS: ", data);
      dispatch(getAddComments(data));
    })
    .catch((error) => {
      // console.log("COMMENTS: ", error);

      dispatch(getCommentsFailed(error.code + ": " + error.message));
    });
};

export const fetchLeaders = () => async (dispatch) => {
  dispatch(getLeadersLoading(true));
  apis
    .getLeaders()
    .then(({ data }) => {
      // console.log("LEADERS: ", data);
      dispatch(getAddLeaders(data));
    })
    .catch((error) => {
      // console.log("LEADERS: ", error);

      dispatch(getLeadersFailed(error.code + ": " + error.message));
    });
};

export const postNewComment = (payload, id) => async (dispatch) => {
  payload.date = new Date().toISOString();
  apis
    .postNewComment(payload, id)
    .then(({ data }) => {
      console.log(data, "APISADASD");
      dispatch(addNewComment(data));
    })
    .catch((error) => alert("Your comment could not be posted"));
};

export const postFeedback = (payload) => async (dispatch) => {
  apis
    .postFeedback(payload)
    .then(({ data }) => {
      alert(JSON.stringify(data), "FEEDBACK ALERT");
    })
    .catch((error) => alert("Your comment could not be posted"));
};
