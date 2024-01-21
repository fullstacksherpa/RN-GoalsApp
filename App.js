import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id){
   setCourseGoals((currentCourseGoals)=>{
    return currentCourseGoals.filter((goal)=>goal.id !==id);
   })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput  addGoalHandler={addGoalHandler}/>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} deleteGoalHandler={deleteGoalHandler} id={itemData.item.id} />;

          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalContainer: {
    flex: 5,
  },
});
