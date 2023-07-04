import{ create} from 'zustand'
export const useStore = create((set,get) => ({
    jcount1: 0, // Join group progress 1
    jcount2: 0, // Join group progress 2
    ncount1: 0, // New group progress 1
    ncount2: 0, // New group progress 2
    ncount3: 0, // New group progress 3
    ncount4: 0, // New group progress 4
    nUser1: {
        fName:'',
        lName:'',
        password:'',
    },
    nUser2:{
        phoneNumber: '',
        email: '',
        city: '',
        userstate: ''
    },
    group1:{
        groupName: '',
        rAccount: '',
        accountNumber: '',
    },
    UserID:"",
    increment1: (data) => set({jcount1:data}), // Join Group 1
    increment2: (data) => set({jcount2:data}), // Join Group 2
    progress11: (data) => set({ncount1:data}), // New Group 1
    progress12: (data) => set({ncount2:data}), // New Group 2
    progress13: (data) => set({ncount3:data}), // New Group 3
    progress14: (data) => set({ncount4:data}), // New Group 4
    decrement: () => set((state) => ({ jcount1: state.jcount1 - 1 })),
  }))
  