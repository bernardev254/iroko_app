<template>
  <div class="add-property-container">
    <h2 class="title">Property</h2>
    <div class="form-container">
      <div class="form-section">
        <label for="property-type">Type</label>
        <select id="property-type" v-model="propertyType">
          <option>Own Property</option>
          <option>Rent Property</option>
        </select>

        <label for="property-name">Name Of Property</label>
        <input id="property-name" v-model="propertyName" placeholder="Enter Property Name" />

        <label for="description">Description</label>
        <textarea id="description" v-model="description" placeholder="Write About Property"></textarea>

        <label for="property-image">Upload Property Image</label>
        <div class="upload-section">
          <input type="file" id="property-image" @change="handleFileUpload" />
          <img v-if="uploadedImage" :src="uploadedImage" alt="Uploaded Property Image" class="uploaded-image-preview" />
        </div>

        <p class="image-info">You can add up to 10 images</p>
      </div>

      <div class="address-section">
        <label for="country">Country</label>
        <input id="country" v-model="country" placeholder="Enter Property Country" />

        <label for="state">State</label>
        <input id="state" v-model="state" placeholder="Enter Property State" />

        <label for="city">City</label>
        <input id="city" v-model="city" placeholder="Enter Property City" />

        <label for="zip-code">Zip Code</label>
        <input id="zip-code" v-model="zipCode" placeholder="Enter Property Zip Code" />

        <label for="address">Address</label>
        <input id="address" v-model="address" placeholder="Enter Full Address" />

        <button class="submit-btn">Add Property</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProperty",
  data() {
    return {
      propertyType: '',
      propertyName: '',
      description: '',
      uploadedImage: null,
      country: '',
      state: '',
      city: '',
      zipCode: '',
      address: '',
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.uploadedImage = URL.createObjectURL(file);
      }
    },
  },
};
</script>

<style scoped>
.add-property-container {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.form-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.form-section,
.address-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-weight: bold;
  color: #2c3e50;
}

input,
select,
textarea {
  padding: 0.5rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
}

textarea {
  resize: vertical;
  height: 100px;
}

.upload-section {
  border: 2px dashed #cccccc;
  border-radius: 4px;
  padding: 1rem;
  text-align: center;
  position: relative;
}

.uploaded-image-preview {
  margin-top: 1rem;
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.image-info {
  font-size: 0.875rem;
  color: #999999;
}

.submit-btn {
  padding: 0.75rem;
  background-color: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #2980b9;
}
</style>