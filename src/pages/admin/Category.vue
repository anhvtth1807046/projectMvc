<template>
  <q-page class="q-pa-sm">
    <q-card class="q-mt-lg">
      <q-card-section class="q-pa-none">
        <q-table :data="data" :columns="columns" :filter="filter" row-key="name" title="Category">
          <template v-slot:top-right>
            <q-input
              v-if="show_filter"
              filled
              borderless
              dense
              debounce="300"
              v-model="filter"
              placeholder="Search..."
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>

            <q-btn class="q-ml-sm" icon="filter_list" @click="show_filter = !show_filter" flat />
            <q-btn
              label="Add"
              class="float-right text-capitalize text-indigo-8 shadow-3"
              icon="library_add"
              @click="dialogVisible = true"
            />
          </template>
          <template v-slot:body-cell-Name="props">
            <q-td :props="props">
              <q-item style="max-width: 420px">
                <q-item-section>
                  <q-item-label>{{ props.row.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template v-slot:body-cell-Action="props">
            <q-td :props="props">
              <q-btn icon="edit" size="sm" flat dense @click="handleShow(props.row)" />
              <q-btn
                icon="delete"
                size="sm"
                class="q-ml-sm"
                flat
                dense
                @click="handleDelete(props.row)"
              />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
    <q-dialog v-model="dialogVisible" full-width>
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">{{ titleForm }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="form.name"
              label="Category name *"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
            />
          </q-form>
        </q-card-section>
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn class="shadow-3" color="teal" label="Save" v-close-popup type="Submit" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="primary" text-color="white" />
          <span class="q-ml-sm">Are you sure?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Ok" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
export default {
  name: "Categories",
  data() {
    return {
      isEdit: false,
      titleForm: "Add category",
      columns: [
        {
          name: "Name",
          label: "Name",
          field: "name",
          sortable: true,
          align: "left"
        },
        {
          name: "Created_At",
          label: "Created At",
          field: "created_at",
          sortable: true,
          align: "left"
        },
        {
          name: "Updated_At",
          label: "Updated At",
          field: "updated_at",
          sortable: true,
          align: "left"
        },
        {
          name: "Action",
          label: "",
          field: "Action",
          sortable: false,
          align: "center"
        }
      ],
      data: [
        {
          name: "Sản phẩm",
          created_at: "15/3/2020",
          updated_at: "15/4/2020"
        },
        {
          name: "Hoa quả",
          created_at: "16/3/2020",
          updated_at: "13/4/2020"
        },
        {
          name: "Bán hoa",
          created_at: "10/3/2020",
          updated_at: "11/4/2020"
        },
        {
          name: "Xôi xéo",
          created_at: "15/3/2020",
          updated_at: "15/4/2020"
        },
        {
          name: "1234",
          created_at: "15/3/2020",
          updated_at: "15/4/2020"
        }
      ],
      filter: "",
      show_filter: true,
      dialogVisible: false,
      confirm: false,
      form: {
        name: null,
        created_at: null,
        updated_at: null
      }
    };
  },
  methods: {
    onSubmit() {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted"
      });
    },

    handleShow(data) {
      this.dialogVisible = true;
      this.titleForm = "Update category";
      console.log(data);
    },

    handleDelete(data) {
      this.confirm = true;
    },

    onReset() {
      this.form.name = null;
    }
  }
};
</script>
<style></style>
